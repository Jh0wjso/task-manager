import "./styles.css";

export default function MainScreen() {
  return (
    <div className="w-screen md:h-screen md:flex md:items-center md:justify-between md:p-20">
      <section className="flex flex-col justify-center items-start p-8 md:w-[40%] h-full mx-5">
        <img src={"src/images/home-icon.png"} alt="logo" width={150} />
        <div className="md:items-center">
          <h1 className="text-6xl md:text-7xl font-bold">CoreNotes</h1>
          <h1 className="text-2xl md:text-2xl font-bold">level up your note taking</h1>
        </div>
        <a href="/login" className="loginButton">
          <div className="font-bold text-lg text-gray-200">Let's Note</div>
        </a>
      </section>
      <section className="flex-col md:justify-center md:items-center w-full h-full mx-4 p-10 md:p-20">
        <div className="noteStyle bg-[#F9F3E5]">
          <p className="border-b-2 border-black p-2 font-bold text-xl">
            Market
          </p>
          <div className="p-4 h-56">
            - Buy milk <br />
            - Buy eggs <br />
            - Buy bread <br />
          </div>
        </div>
        <section className="md:flex md:justify-between items-center w-full md:mx-10 md:p-8">
          <div className="noteStyle bg-[#D0F4F0]">
            <p className="border-b-2 border-black p-2 font-bold text-xl">
              Monday
            </p>
            <div className="p-4 h-56">
              - Meeting at 10:00 <br />
              - Gym at 18:00 <br />
            </div>
          </div>
          <div className="noteStyle bg-[#F4D799]">
            <p className="border-b-2 border-black p-2 font-bold text-xl">
              Workout
            </p>
            <div className="p-4 h-56">
              - 10 pushups <br />
              - 20 situps <br />
              - 30 squats <br />
              - 40 jumping jacks <br />
            </div>
          </div>
          <div className="noteStyle bg-[#949af0]">
            <p className="border-b-2 border-black p-2 font-bold text-xl">
              Dinner
            </p>
            <div className="p-4 h-56">
              - Chicken <br />
              - Rice <br />
              - Salad <br />
              - Water <br />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
