import { useState, useEffect } from "react";

const Card = ({ data }: any) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const originalImageUrl = data["Foto Profile"];

  useEffect(() => {
    if (originalImageUrl) {
      const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(
        originalImageUrl
      )}`;
      setImageUrl(proxyUrl);
    } else {
      setImageUrl(originalImageUrl);
    }
    setImageLoading(false);
  }, [originalImageUrl]);

  console.log("Original imageUrl:", originalImageUrl);
  console.log("Proxy imageUrl:", imageUrl);

  return (
    <div
      style={{
        background: "#171717",
        width: "100%",
        borderRadius: "12px",
        color: "#BEBEBE",
      }}
    >
      <p style={{ fontSize: "14px", padding: "16px" }}>{data["Isi Pesan"]}</p>

      <div
        style={{
          width: "100%",
          borderTop: "1px solid #222222",
          padding: "16px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#333",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {imageLoading ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#444",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontSize: "10px",
              }}
            >
              ...
            </div>
          ) : imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "100%",
              }}
              onError={(e) => {
                console.error("Image failed to load:", imageUrl);
                setImageError(true);
              }}
              onLoad={() => {
                console.log("Image loaded successfully:", imageUrl);
                setImageError(false);
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#555",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {data["Nama"] ? data["Nama"].charAt(0).toUpperCase() : "?"}
            </div>
          )}
        </div>

        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "2px",
              color: "white",
            }}
          >
            {data["Nama"]}
          </p>
          <p style={{ fontSize: "12px" }}>{data["Perusahaan"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
