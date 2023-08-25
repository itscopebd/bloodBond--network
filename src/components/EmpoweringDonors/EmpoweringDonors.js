import React from "react";

const EmpoweringDonors = () => {
  return (
    <section>
      <h1 className="text-5xl text-center font-bold text-red-500 pt-12">
        Empowering Donors
      </h1>
      <p className="text-gray-500 pt-10 text-center">
        Be the Hero of Your Story.Discover the remarkable impact of your blood
        donation journey. <br /><br /> And how your generosity saves lives and create bright
        future of others.
      </p>
      <div className="relative z-10 w-[90%] mx-auto">
        <img
          className="rounded mt-10 "
          src="https://i.ibb.co/QdWFfpv/donate.jpg"
          alt=""
        />

        <div className="flex  gap-20 relative z-20 justify-center bottom-10 ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-auto rounded">
                <img src="https://i.ibb.co/Ch2b8QN/m-student.jpg"></img>
              </div>
            </div>{" "}
            <div className="card-body">
              <h2 className="card-title">
                University Student
              </h2>
              <p>Explore the fascinating world of blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
              </p>

            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-auto rounded">
                <img src="https://i.ibb.co/rv0swTx/doc-2.jpg"></img>
              </div>
            </div>{" "}
            <div className="card-body">
              <h2 className="card-title">
                University Student
              </h2>
              <p>Explore the fascinating world of blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
              </p>
            </div>
          </div>


        </div>
        <div className="flex justify-center">
          <button className="btn btn-outline btn-error">See more</button>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringDonors;
