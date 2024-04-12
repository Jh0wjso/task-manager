import "./styles.css";

export default function MainScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-between p-20">
      <section className="flex flex-col justify-center items-start p-8 w-[40%] h-full mx-5">
        <div className="w-[100%] flex items-center justify-center">
          <img src={"src/images/home-icon.png"} alt="logo" width={200} />
        </div>
        <div className="items-center">
          <h1 className="text-8xl font-bold">CoreNotes</h1>
          <h1 className="text-4xl font-bold">level up your note taking</h1>
        </div>
        <a href="/login" className="loginButton">
          <div className="font-bold text-lg text-gray-200">Let's Note</div>
        </a>
      </section>
      <section className="flex-col justify-center items-center w-full h-full mx-4 p-20">
        <div className="noteStyle bg-[#F9F3E5]">
          <p className="border-b-2 border-black p-2 font-bold text-xl">
            Market
          </p>
          <div className="p-4 h-44">
            - Buy milk <br />
            - Buy eggs <br />
            - Buy bread <br />
          </div>
        </div>
        <section className="flex justify-between items-center w-full mx-10 p-8">
          <div className="noteStyle bg-[#D0F4F0]">
            <p className="border-b-2 border-black p-2 font-bold text-xl">
              Monday
            </p>
            <div className="p-4 h-44">
              - Meeting at 10:00 <br />
              - Gym at 18:00 <br />
            </div>
          </div>
          <div className="noteStyle bg-[#F4D799]">
            <p className="border-b-2 border-black p-2 font-bold text-xl">
              Workout
            </p>
            <div className="p-4 h-44">
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
            <div className="p-4 h-44">
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
