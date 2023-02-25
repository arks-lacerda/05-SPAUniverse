export function Backgrounds({ bgHome, bgUniverse, bgExploration }) {
  function backgroundHome() {
    document.body.classList.remove("universe");
    document.body.classList.remove("exploration");
    document.body.classList.add("home");
  }
  function backgroundUniverse() {
    document.body.classList.remove("exploration");
    document.body.classList.remove("home");
    document.body.classList.add("universe");
  }
  function backgroundExploration() {
    document.body.classList.remove("home");
    document.body.classList.remove("universe");
    document.body.classList.add("exploration");
  }

  return {
    backgroundHome,
    backgroundUniverse,
    backgroundExploration,
  };
}
