import React from 'react'
import ExcelDropzone from './excel-dropzone.jsx'

export default class Main extends React.Component {

  handleSheetData (data) {
    // replace this log with actual handling of the data
    console.log(data)
  }

  render () {
    return (
      <ExcelDropzone
        onSheetDrop={this.handleSheetData}
      />
    )
  }
}
