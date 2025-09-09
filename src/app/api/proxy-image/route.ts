export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return new Response(JSON.stringify({ error: 'URL parameter is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const convertedUrl = convertGoogleDriveUrl(url);

        const response = await fetch(convertedUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const contentType = response.headers.get('content-type') || 'image/jpeg';
        const buffer = await response.arrayBuffer();

        return new Response(buffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=86400',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Proxy error:', error);
        return new Response(JSON.stringify({ error: 'Failed to proxy image' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}


function convertGoogleDriveUrl(url: any) {
    if (!url) return null;

    let fileId = null;

    if (url.includes("id=")) {
        fileId = url.split("id=")[1];
    } else if (url.includes("/file/d/")) {
        fileId = url.split("/file/d/")[1].split("/")[0];
    }

    if (fileId) {
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    return url;
}