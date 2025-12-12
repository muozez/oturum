import { useRef, useState } from "react";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

export default function QRCard() {
  const qrRef = useRef<string>("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm mx-auto">
      <Scanner
        allowMultiple={true}
        onScan={(results: IDetectedBarcode[]) => {
          if (!results || results.length === 0) return;

          const item = results[0];
          const value = item.rawValue || item.barcodeText || "";

          if (value && value !== qrRef.current) {
            qrRef.current = value;
            setText(value);
            navigate(`/qr-result?data=${encodeURIComponent(value)}`);
          }
        }}
        onError={(error) => console.error(error)}
      />

      <h1 className="text-center mt-4 font-bold">{text}</h1>
    </div>
  );
}
