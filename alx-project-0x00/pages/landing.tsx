import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Buy Now" styles="px-6 py-3 text-sm rounded-sm"  />
      <Button title="Buy Now" styles="px-6 py-3 text-base rounded-md"  />
      <Button title="Buy Now" styles="px-6 py-3 text-lg rounded-full "  />
      
    </div>
  )
}
export default Landing