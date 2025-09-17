import classes from "./Documentation.module.scss";
export default function FuncName() {
  return (
    <section>
      <h1>Documentation</h1>
      <div>
        <ul className={`${classes.list} container`}>
          <li>
            In case of insufficient understanding of the functionality of the
            user interface element represented by the slider, you can activate
            the contextual hint mechanism by hovering the cursor over this
            element. During a short time interval, approximately one second, a
            miniature modal window is initiated, containing a concise and
            informative description of the slider's functionality, which
            contributes to a deeper understanding of its purpose and scope
            within the framework of user interaction.
          </li>
          <li>
            Two methods are provided for copying the program code, ensuring high
            speed of this operation:
            <br />
            <span>
              - Activate the copy function by pressing the corresponding button.
            </span>
            <br />
            <span>
              - Select the code element and then perform the copy operation.
            </span>
          </li>
          <li>
            If you are not satisfied with the current interface color scheme
            (light or dark), you can change it to an alternative one in the
            upper-left corner of the screen using the corresponding graphic
            symbol (sun or moon).
          </li>
        </ul>
      </div>
    </section>
  );
}
