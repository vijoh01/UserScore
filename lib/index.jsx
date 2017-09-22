import React from 'react'
import ExcelDropzone from './excel-dropzone.jsx'
import { MTRow, MTColumn } from 'mt-ui'

export default class Main extends React.Component {

  handleSheetData (data) {
    // replace this log with actual handling of the data
    console.log(data)
  }

  render () {
    return (
      <div className="container container--centered">
        <h1 className="m-t">Mediatool exercise</h1>
        <MTRow>
          <MTColumn width={ 20 }>
            <ExcelDropzone
              onSheetDrop={this.handleSheetData}
              label="Drop your file here"
            />
          </MTColumn>
          <MTColumn width={ 75 } offset={ 5 }>
            <MTRow>
              <MTColumn>
                <h2>Initial site</h2>
                <p>
                  Drop the excel file "scores.xlsx" that you will find in this repo in the area to the left and watch the log output in the console.
                  We hope this is enough to get you started with the import.
                </p>
              </MTColumn>
            </MTRow>
            <MTRow>
              <MTColumn>
                <h2>Explaining the grid</h2>
                <p>
                  In the Mediatool grid you can use MTRow and MTColumn to structure your graphical components.
                  This is basically what you need to know:
                </p>
                <ul>
                  <li>Each row will be located beneath the previous one</li>
                  <li>Columns in one row will stretch to the width of the entire parent component and they will have the same size unless you provide them with a with property</li>
                  <li>If you set the widht you do so in percent</li>
                </ul>
                <p>You can also nest these components like this row is nested inside a column.</p>
              </MTColumn>
            </MTRow>
          </MTColumn>
        </MTRow>
      </div>
    )
  }
}
