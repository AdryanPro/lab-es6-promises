// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes", 4, (step5) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li>`;
                  document
                    .querySelector("#mashedPotatoesImg")
                    .removeAttribute("hidden");
                  document
                    .querySelector("#mashedPotatoesImg")
                    .removeAttribute("hidden");
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>Mashed potatoes are ready</li>`;
                });
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Enjoy your steak</li>`;
    return obtainInstruction("steak", 8);
  })
  // .then(() => {
  //   document.querySelector("#steak").innerHTML += `<li>Enjoy your steak</li>`;
  //   //return obtainInstruction("steak", 9);
  // })
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  //   for (let i = 0; i <= broccoli.length; i++) {
  //     if (i < broccoli.length) {
  //       const instruction = await obtainInstruction("broccoli", i);
  //       document.querySelector(
  //         "#broccoli"
  //       ).innerHTML += `<li>${instruction}</li>`;
  //     } else {
  //       document.querySelector(
  //         "#broccoli"
  //       ).innerHTML += `<li>Broccoli is ready</li>`;
  //     }
  //   }
  // }

  for (let i = 0; i < broccoli.length; i++) {
    const instruction = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
function makeSprouts() {
  const arr = [];

  for (let i = 0; i < brusselsSprouts.length; i++) {
    arr.push(obtainInstruction("brusselsSprouts", i));
  }
  const promiseArr = Promise.all(arr);
  promiseArr
    .then((result) => {
      result.forEach((element) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${element}</li>`;
      });
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>brussels Sprouts are ready</li>`;
    })
    .finally(() => {
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
}

makeSprouts();
