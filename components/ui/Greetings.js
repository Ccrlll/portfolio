import { TypeAnimation } from "react-type-animation"

const Greetings = () => {
  return (
    <div>
        <h1 className="text-secondary text-xl flex flex-col gap-1 font-semibold">I&apos;m&nbsp;Carl&nbsp;Palasigue&nbsp;
            <span className="text-accent font-semibold text-4xl">
                <TypeAnimation
                    sequence={['Frontend Developer', 1000]}
                    wrapper="span"
                    speed={10}
                />
            </span>
        </h1>
    </div>
  )
}

export default Greetings