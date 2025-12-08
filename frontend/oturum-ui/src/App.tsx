import QRCard from './components/QRCard'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      <QRCard />
      <p className='w-full max-w-xs mt-4 text-center text-gray-500'>QR Kodu Görevliye Gösteriniz</p>
    </div>
  )
}

export default App
