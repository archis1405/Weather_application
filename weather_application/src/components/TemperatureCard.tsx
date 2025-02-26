function TemparatureCard({ temperature, image , title } : { temperature: string, image: string, title: string }) {
    return(
        <div className="flex flex-col justify-between items-center border bg-white rounded-3xl p-2 h-[10rem] w-[7rem]">
            <div className="text-lg font-semibold">
                {title}
            </div>
            <div className="h-[40%]">
                <img className="h-full"
                 src={image} />
                
            </div>
            <div className="text-lg font-semibold">
                {temperature}
            </div>
        </div>
    )
}

export default TemparatureCard;