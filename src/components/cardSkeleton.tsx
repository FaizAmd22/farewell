const CardSkeleton = () => {
    return (
        <div
            style={{
                background: "#171717",
                borderRadius: "12px",
                padding: "16px",
                width: "100%",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    height: "16px",
                    width: "60%",
                    background: "linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                    borderRadius: "8px",
                }}
            />
            <div
                style={{
                    height: "12px",
                    width: "40%",
                    background: "linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                    borderRadius: "6px",
                }}
            />

            <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </div>
    );
};

export default CardSkeleton;
