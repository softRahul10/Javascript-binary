debugger;
// Block Scope
{
      let levelOne = 1;
      console.log(levelOne);

      {
            let levelTwo = 2;
            console.log(levelTwo);
            console.log(levelOne);
      }

      console.log(levelTwo);
}