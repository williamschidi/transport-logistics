import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../utils/Button";
import JusioSearchSection from "../../utils/JusioSearchSection";

function JusioIndex() {
  const shadow = "0 4px 4px rgba(0, 0, 0, 0.6)";
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4  px-10 pt-6">
        <div className="flex flex-col justify-center items-center gap-2 pb-4">
          <h2 className="text-xl font-semibold">Innovation Packages</h2>
          <p className="text-xs font-light">
            Kickstart any innovation process with comprehensive selection of
            predefined prompts.
          </p>
        </div>
        <div className="flex justify-between items-start w-[100%] text-gray-300">
          <div className="space-y-6">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span
                className="w-[2rem] h-[2rem] rounded-full bg-gradient-to-r from-gray-700 to-gray-800 inline-flex justify-center items-center"
                style={{ boxShadow: shadow }}
              >
                <Icon
                  icon="ep:chat-round"
                  width="24"
                  height="24"
                  className="w-[1rem] h-[1rem] text-green-300"
                />
              </span>
              <p className="text-sm font-semibold">Creative Assets</p>
            </div>
            <div className="space-y-2">
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">UI Wireframe</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Brochure design</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Social media</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Brand guidelines</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Product Design</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span
                className="w-[2rem] h-[2rem] rounded-full bg-gradient-to-r from-gray-700 to-gray-800 flex justify-center items-center"
                style={{ boxShadow: shadow }}
              >
                <Icon
                  icon="mdi:code-tags"
                  width="24"
                  height="24"
                  className="w-[1rem] h-[1rem] text-[#82DBF7]"
                />
              </span>
              <p className="text-sm font-semibold">Developer Tools</p>
            </div>
            <div className="space-y-2">
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">API Integration</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Test automation</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">DB optimization</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Code review</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Programming</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span
                className="w-[2rem] h-[2rem] rounded-full bg-gradient-to-r from-gray-700 to-gray-800 inline-flex justify-center items-center"
                style={{ boxShadow: shadow }}
              >
                <Icon
                  icon="mdi-light:pencil"
                  width="24"
                  height="24"
                  className="w-[1rem] h-[1rem] text-[#BD9AF8]"
                />
              </span>
              <p className="text-sm font-semibold">Content Creation</p>
            </div>
            <div className="space-y-2">
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Product description</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">E-mail copy</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Whitepaper</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Chart GPT Prompts</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Press release</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span
                className="w-[2rem] h-[2rem] rounded-full bg-gradient-to-r from-gray-700 to-gray-800 inline-flex justify-center items-center"
                style={{ boxShadow: shadow }}
              >
                <Icon
                  icon="lets-icons:lamp"
                  width="24"
                  height="24"
                  className="w-[1rem] h-[1rem] text-[#FFD147]"
                />
              </span>
              <p className="text-sm font-semibold">Idea Generation</p>
            </div>
            <div className="space-y-2">
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Hashtag ideas</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Brainstorming</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Trend analysis</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Social media posts</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
              <Button btnSize="lg" bg="linear" shadow={shadow}>
                <span className="text-[.7rem]">Multi Level Marketing</span>
                <Icon
                  icon="guidance:left-arrow"
                  width="24"
                  height="24"
                  className="w-[.8rem] h-[.8rem]"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="py-8">
          <Button btnSize="lg" bg="linear" shadow={shadow}>
            <span className="text-[.7rem]">Multi Level Marketing</span>
            <Icon
              icon="guidance:left-arrow"
              width="24"
              height="24"
              className="w-[.8rem] h-[.8rem]"
            />
          </Button>
        </div>
      </div>
      <JusioSearchSection />
    </div>
  );
}

export default JusioIndex;
