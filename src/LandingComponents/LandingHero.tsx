import pix from "../assets/phone.png"

const LandingHero = () => {
  return (
    <div>
         <div className="w-[100%] h-[100vh] bg-blue-700 pl-[130px] pt-[120px] mb-[30px]">
          <div className="w-[82%] h-full bg-blue-00 flex max-sm:w-[200px] relative">
            <div className="w-[60%]  h-full pt-8 bg-green-00 text-white">
              <div className="w-[80%] text-[64px] font-extrabold">Make Cool Landing Pages With sApp</div>
              <div className="text-[20px] w-[85%] mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cumque ipsum. Eligendi, debitis! Ratione eveniet fuga autem tenetur iure labore quisquam, obcaecati placeat numquam ipsa assumenda dolores quibusdam, fugit maiores?</div>
            </div>
            <div className="w-[40%] h-full bg-red-00 object-cover flex items-center">
            <div className="h-[100%] w-[70%] ml-[90px]">
            <img src={pix} alt="" className="w-full h-full "/>
            </div>
            </div>
          </div>
     </div>
    </div>
  )
}

export default LandingHero