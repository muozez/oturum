import QRCode from 'react-qr-code';

function QRCard() {
  return (
    <div className='w-full max-w-xs bg-white p-6 rounded-xl shadow padding-16'>
        <QRCode value='https://github.com/muozez'
        size={256}
        style={{ width: "100%", height: "100%"}}
        viewBox='0 0 256 256'
        ></QRCode>

    </div>
  )
}

export default QRCard