import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/challenge/';


export default function AddQuestions() {



  // storing number of test cases
  const cases = []
  // storing number of tags from APIrequest
  const [tags, setTags] = useState();
  const [numCases, setNumcases] = useState(3)
  const [tagArray, setTagArray] = useState({});


  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );



  console.log(numCases);
  console.log('Tag selected : ', tagArray);


  const handleChange = (event) => {
    setTagArray({ ...tagArray, [event.target.name]: event.target.checked });
  }

  const addNewCase = () => {
    if (numCases < 8) {
      setNumcases(numCases + 1);
    }
  }
  const delNewCase = () => {
    if (numCases > 3) {
      setNumcases(numCases - 1);
    }
  }

  const [inputcases, setInputcases] = useState({})
  const [outputcases, setOutputcases] = useState({})

  const inputCase = (event) => {
    setInputcases({ ...inputcases, [event.target.name]: event.target.value })
    console.log(inputcases)
  }
  const outputCase = (event) => {
    setOutputcases({ ...outputcases, [event.target.name]: event.target.value })
    console.log(outputcases)
  }


  useEffect(() => {
    axios.get(API_URL + 'tag_list')
      .then(response => {
        setTags(response.data)
        console.log(tags);
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(editorState);
    console.log(tagArray)
  }, [editorState]);




  return (
    <div className="container">
      <h5 className="my-4">Add Question</h5>
      <hr />
      <h5>What is your challenge ?</h5>
      <div className="row">
        <div className="col-md-8  shadow" style={{ padding: '2px', minHeight: '400px' }}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <div className="col-md-3 mx-auto shadow p-4">
          <h5>What does it related to ?</h5>
          <div className="col-12 " style={{ height: '250px', overflowY: 'scroll' }}>
            {tags && tags.map(d => {
              return (
                <div className="form-check">
                  <input className="form-check-input" name={d.tag} checked={tagArray[d.tag]} onChange={handleChange} type="checkbox" value="" id={d.tag} />
                  <label className="form-check-label" for={d.tag}>
                    {d.tag}
                  </label>
                </div>
              )
            })}

          </div>
          <div className="col-12 mt-3">
            <h5>Difficulty level ?</h5>
            <select className="form-control">
              <option selected value="easy">Easy</option>
              <option value="Mmdium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row d-flex my-3 justify-content-between">
        <div className='col-md-10'>
          <h5>Test Cases <span className="h6">(Make sure to test them before adding it )</span> </h5>
        </div>
        <div className='col-md-2'>
          <h6>Test Cases: {numCases}</h6>
        </div>
      </div>
      <div className="col-md-12">
        {[...Array(numCases)].map((elementInArray, index) => (
          <div key={index} className="row col-md-12 shadow p-3 my-3">
            <h6 className="">case {index + 1}</h6>
            <div className="col-md-6">
              <input className='form-control' type="text" placeholder="Input" name={index + 1} onChange={inputCase} />
            </div>
            <div className="col-md-6">
              <input className='form-control' type="text" placeholder="Expected output" name={index + 1} onChange={outputCase} />
            </div>
          </div>
        ))}

        <div className="btn btn-primary my-4" onClick={addNewCase}><i className="far fa-plus mx-2"></i>Add another test case</div>
        <div className="btn btn-primary my-4" onClick={delNewCase}><i className="far fa-plus mx-2"></i>Remove</div>
      </div>
    </div>
  );
}