import { useState } from "react";
import logo from '../../assets/logo.png';
import pro from '../../assets/profile.jpg';
import men from '../../assets/men.jpg';

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
       <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
  {/* Left Section: Logo + Tabs */}
  <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col lg:items-end lg:text-right">
    {/* Logo */}
    <div className="mb-6 lg:mb-12 w-40 lg:w-48 md:mx-auto lg:mx-0">
      <img
        src={logo}
        loading="lazy"
        alt="Organization Logo"
        className="w-full h-auto"
      />
    </div>

    {/* Tabs */}
    <div className="w-full max-w-xs lg:w-auto md:mx-auto lg:mx-0">
      <div 
        role="tablist" 
        aria-label="Leadership and Mentorship tabs"
        className="flex flex-col lg:flex-col gap-2 border-b-0 lg:border-r border-gray-200"
      >
        <button
          role="tab"
          aria-selected={activeTab === "overview"}
          aria-controls="overview-panel"
          id="overview-tab"
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-3 text-left lg:text-right text-lg font-medium rounded-lg lg:rounded-r-none transition-all ${
            activeTab === "overview"
              ? "bg-[var(--color-secondary)] bg-opacity-10 text-white border-r-4 border-[var(--color-secondary)]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Leadership
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "setsapart"}
          aria-controls="setsapart-panel"
          id="setsapart-tab"
          onClick={() => setActiveTab("setsapart")}
          className={`px-4 py-3 text-left lg:text-right text-lg font-medium rounded-lg lg:rounded-r-none transition-all ${
            activeTab === "setsapart"
              ? "bg-[var(--color-secondary)] bg-opacity-10 text-white border-r-4 border-[var(--color-secondary)]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Mentorship
        </button>
      </div>
    </div>
  </div>

  {/* Right Section: Content Area */}
  <div className="w-full lg:w-3/4 xl:w-4/5">
    {/* Leadership Panel */}
    {activeTab === "overview" && (
      <section
        id="overview-panel"
        role="tabpanel"
        aria-labelledby="overview-tab"
        className="flex flex-col xl:flex-row gap-8 xl:gap-12 bg-white rounded-xl shadow-sm p-6 md:p-8"
      >
        <div className="xl:w-1/2 space-y-6">
          <div>
            <span className="inline-block text-sm uppercase tracking-wider text-[var(--color-secondary)] font-semibold mb-2">
              Leadership 
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ms. Shareefa
            </h2>
            <div className="h-1 w-16 bg-[var(--color-secondary)] mt-4 mb-6"></div>
          </div>
          
          <div className="space-y-5 text-gray-700">
            <p className="text-lg leading-relaxed">
              I believe certain traits can naturally predispose individuals to become strong entrepreneurs or business leaders. However, it's often life experiences especially challenges and setbacks that shape true leadership. These moments teach us to think creatively, take calculated risks, and adapt quickly.
            </p>
            <p className="text-lg leading-relaxed">
              For me, seeing the positive in every situation has been essential. It's a mindset that builds resilience and sharpens problem-solving — two qualities that are critical to leading effectively in uncertain and demanding environments. Ambition has consistently pushed me to break through obstacles, guided by self-belief and a deep desire to make meaningful change.
            </p>
          </div>
          
          <div className="bg-[var(--color-secondary)] bg-opacity-5 p-5 rounded-lg border-l-4 border-[var(--color-secondary)]">
            <p className="italic text-white text-lg">"Talent is Made, Not Born."</p>
            <p className="font-medium text-white mt-2"> - Ms. Shareefa</p>
          </div>
        </div>
        
        <div className="xl:w-1/2 relative">
          <div className="absolute -left-6 top-1/4 w-2 h-48 bg-[var(--color-secondary)] rounded-full"></div>
          <img
            src={pro}
            loading="lazy"
            alt="Ms. Shareefa portrait"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    )}

    {/* Mentorship Panel */}
    {activeTab === "setsapart" && (
      <section
        id="setsapart-panel"
        role="tabpanel"
        aria-labelledby="setsapart-tab"
        className="flex flex-col xl:flex-row gap-8 xl:gap-12 bg-white rounded-xl shadow-sm p-6 md:p-8"
      >
        <div className="xl:w-1/2 space-y-6">
          <div>
            <span className="inline-block text-sm uppercase tracking-wider text-[var(--color-secondary)] font-semibold mb-2">
              Mentorship 
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ms. Shareefa
            </h2>
            <div className="h-1 w-16 bg-[var(--color-secondary)] mt-4 mb-6"></div>
          </div>
          
          <div className="space-y-5 text-gray-700">
            <p className="text-lg leading-relaxed">
              As an MBA graduate, I felt a strong calling to apply my skills beyond personal success — to help shape the future of others. This led to the founding of an organization focused on Knowledge Engineering for India's youth.
            </p>
            <p className="text-lg leading-relaxed">
              We mentor young individuals by recognizing their inherent potential and helping them transform it into excellence. Through personalized support, encouragement, and opportunities, we cultivate talents, keep them motivated, and open paths to achievement that go beyond expectations.
            </p>
            <p className="text-lg leading-relaxed">
              By nurturing not just skills but also confidence, we aim to shape individuals who can leave a lasting impact on their world.
            </p>
          </div>
          
          <div className="bg-[var(--color-secondary)] bg-opacity-5 p-5 rounded-lg border-l-4 border-[var(--color-secondary)]">
            <p className="italic text-white text-lg">"Redefining Talent"</p>
            <p className="font-medium text-white mt-2"> - Ms. Shareefa</p>
          </div>
        </div>
        
        <div className="xl:w-1/2 relative">
          <div className="absolute -left-6 top-1/4 w-2 h-48 bg-[var(--color-secondary)] rounded-full"></div>
          <img
            src={men}
            loading="lazy"
            alt="Mentorship session"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    )}
  </div>
</div>

      </div>
    </div>
  );
}