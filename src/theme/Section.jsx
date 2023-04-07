const Section = (props) => {
  const x = props.show1(" ji ");
  return (
    <>
      <section>
        <p>
          {" "}
          -------{props.fname} --- {props.lname} --- {x}
        </p>
      </section>
    </>
  );
};

// const Section = (props) => {
//   let {fname , lname, show1} = props ;

// show1(" ji ");

//   return (
//     <>
//       <section>
//         -------{fname} --- {lname}
//       </section>
//     </>
//   );
// };

export default Section;

// const Section = ({ fname, lname, show1 }) => {

// show1(" ji ");

//   return (
//     <>
//       <section>
//         -------{fname} --- {lname}
//       </section>
//     </>
//   );
// };

// export default Section;
