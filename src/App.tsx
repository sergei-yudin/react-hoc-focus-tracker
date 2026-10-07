import { useState } from "react";
import { FocusHeader } from "./components/FocusHeader";
import { ProjectEditor } from "./components/ProjectEditor";
import { withFocusTracker } from "./hoc/withFocusTracker";
import "./App.css";

const TrackedEditor = withFocusTracker(ProjectEditor);

export default function App() {
  const [projectName, setProjectName] = useState("Новый проект");
  const [isEditorFocused, setIsEditorFocused] = useState(false);

  return (
    <main>
      <FocusHeader isFocused={isEditorFocused} />
      <TrackedEditor
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
        onFocusChange={setIsEditorFocused}
      />
      <button className="outside">Элемент вне компонента</button>
    </main>
  );
}
