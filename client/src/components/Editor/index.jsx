import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

const ReactEditorJS = createReactEditorJS()


function Editor(){
    return (
        <div>
            <h1>Editor</h1>
            <ReactEditorJS  tools={EDITOR_JS_TOOLS} />
        </div>
    );
};

export default Editor;