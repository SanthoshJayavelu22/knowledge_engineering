import leaderImage from '../assets/3.jpg';
import teamImage from '../assets/1.jpg';
import soarImage from '../assets/logo.png';
import achieversImage from '../assets/3.jpg';
import recordsImage from '../assets/4.jpg';

const FounderMessage = () => {
  return (

    <div className="bg-white mt-20 md:mt-30">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-80"></div>
        <img 
          src={leaderImage} 
          alt="Business leader" 
          className="w-full h-[400px] md:h-[500px] object-cover object-center "
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Knowledge <span className="text-[var(--color-secondary)]">Engineering</span> Founder Message
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-sm" data-aos="fade-up">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I do believe that one is inherently predisposed to particular traits which might make one, more suitable to be an entrepreneur or business leader. But what I also firmly believe is that it's your life experiences, including overcoming setbacks and roadblocks, which can be the trigger for thinking outside the box, seeking and imagining solutions, and deciding to take risks, you might not have otherwise. I trust that to see positivity is to see the upside of every situation – a vital skill to cope with the stresses and challenges which go hand in hand with entrepreneurship, improving my resilience and capacity for learning and problem-solving.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ambition has always driven me to excel at everything I do, making me quickly adept at pushing through the inevitable setbacks and have enough self-belief in their influence to affect change.
          </p>
        </div>
      </section>

      {/* Knowledge Engineering Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img 
                src={teamImage} 
                alt="Team training session" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-[var(--color-secondary)]">Approach</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Being an MBA, I had to put my qualifications and my skills to good use and thus started an organization that would indulge in Knowledge Engineering for the young minds of India. By Knowledge Engineering, we mean to focus on partnering with a young person so that she/he delivers her/his exceptional side—to showcase her/his talents to the world and establish the person as an achiever to have a lasting impact on his surroundings. We believe we can make talent that one may not be necessarily born with.
                </p>
                <p>
                  We undertake to rear achievers by training the inherent talents of the children and the youth. We do this engineering by evolving the skills of the youngsters, through observation and identification of their talent and ensuring that their efforts are well recognized, and hugely applauded which would keep them motivated and provide them with varied avenues to cultivate their interests. This is made effective by enabling them to enhance the work quality that helps them not only to achieve their goals but exceed them as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Methodology Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Team Section */}
          <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--color-secondary)]">Exceptional Team</span>
            </h3>
            <p className="text-gray-700 mb-6">
              have been quite successful in creating an exceptional team to help me train such achievers and create a tremendous impact. I have spent a huge amount of time meticulously training this battery of specially skilled trainers and honing their skills. With this developed skill they would scout and identify these extraordinary talents and polish them towards holistic growth to make them sparkle. We believe that every child is a bundle of talent and we need only to give the right environment to help it to shine like a star!
            </p>
            <p className="text-gray-700">
              We embark on this challenging journey by involving the parents who are in the closest proximity to help their children discover and develop talent in any domain. We have found that though most parents are eager to help their children on this treacherous path often are at crossroads! They have learnt to trust us as we have created a formidable reputation in this realm of knowledge engineering!
            </p>
          </div>

          {/* SOAR System */}
          <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The <span className="text-[var(--color-secondary)]">SOAR System</span>
            </h3>
            <div className="flex flex-col  items-center gap-6">
              <div className="flex-1">
                <p className="text-gray-700 mb-6">
                  We have introduced several methodologies to achieve great success in implementing knowledge engineering. We offer insights and step-by-step plans to help children reach their potential, through the SOAR system: Selection: Organization: Association & Regulation. We have intricately chalked out plans for parents to maximize early experiences, organize mentors, expedite practice, boost motivation, construct a center of excellence, and administer talent development.
                </p>
              </div>
              {/* <div className="flex-1">
                <img src={soarImage} alt="SOAR system diagram" className="w-full rounded-lg" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Achievers Section */}
      <section className="py-16 bg-[var(--color-primary)] bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img 
                src={achieversImage} 
                alt="Our achievers" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Creating <span className="text-[var(--color-secondary)]">Achievers</span>
              </h2>
              <div className="space-y-6 text-white text-lg">
                <p>
                  As we also demonstrate these hand-crafted talents to the world, we motivate and inspire others. We assess their subjective skills based on their interest and exhibit their passion to all. Eventually, as they receive recognition from various quarters, they get inspired to improve their performances further to the point of excellence. Knowledge engineering provides them with a platform to display their credentials since recognition helps them to champion their work and make them realize what difference they have created in different fields.
                </p>
                <p>
                  We insist that they train not only on specific topics but also acquire holistic knowledge on that specific subject. Equal importance is given to developing life skills like efficient time management, shouldering more responsibilities and being able to face challenges in all walks of life, and learning from their failures to fine-tune their talent a notch higher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Records & Recognition */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--color-secondary)]">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img 
              src={recordsImage} 
              alt="World records" 
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-6">
                We have to date prepared more than 200+ achievers and their names have been recorded in different books of records like the Guinness Book of Records, World Records Union, Asia Book of Records, and India Book of Records. Our unique concept of Knowledge Engineering has created this remarkable world of victories from various steps of life.
              </p>
              <p className="text-gray-700">
                My team and I are making tireless efforts to feature such personalities and create awareness all across the world about Knowledge Engineering and what can be achieved by this technique. As I march ahead with an indomitable spirit, my team and I overcome many challenges and emerge as role models for many others.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FounderMessage
