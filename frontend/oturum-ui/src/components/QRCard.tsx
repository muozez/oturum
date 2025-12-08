import QRCode from 'react-qr-code';

function QRCard() {
  return (
    <div className='qr-card'>
        <QRCode value='https://github.com/muozez' size={256}></QRCode>
    </div>
  )
}

export default QRCard