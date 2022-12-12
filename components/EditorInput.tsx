import * as React from "react"

import dynamic from "next/dynamic"

const importJodit = () => import("jodit-react")

import type { IJoditEditorProps } from "jodit-react"
const JoditEditor = dynamic(importJodit, {
  ssr: false,
})

export const EditorInput = ({ isControlled }: { isControlled?: boolean }) => {
  const [value, setValue] = React.useState("")

  console.log(value)

  // @ts-ignore
  const config: IJoditEditorProps["config"] = React.useMemo(
    () => ({
      readonly: false,
      enableDragAndDropFileToEditor: false,
      toolbarAdaptive: false,
      toolbarSticky: true,
      addNewLine: false,
      useSearch: false,
      hidePoweredByJodit: true,
      link: {
        noFollowCheckbox: false,
        modeClassName: false,
      },
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "left",
        "indent",
        "outdent",
        "ul",
        "ol",
        "hr",
        "fontsize",
        "link",
        "undo",
        "redo",
      ],
    }),
    [],
  )

  return (
    <div>
      <p>{isControlled ? "Controlled" : "Uncontrolled"}</p>
      {isControlled ? (
        <JoditEditor config={config} value={value} onChange={setValue} />
      ) : (
        // @ts-ignore
        <JoditEditor config={config} />
      )}
    </div>
  )
}
