function formStyles(Form) {
    return {
      ...Form.stylesheet,
      formGroup: {
        normal: {
          marginBottom: 10,
        },
        error: {
          marginBottom: 10,
        },
      },
      controlLabel: {
        normal: {
          color: 'grey',
          fontSize: 18,
          fontStyle: 'italic',
          marginBottom: 7,
          fontWeight: 'normal',
        },
        error: {
          color: 'grey',
          fontSize: 18,
          fontStyle: 'italic',
          marginBottom: 7,
          fontWeight: 'normal',
        },
      },
      textbox: {
        normal: {
          paddingLeft: 7,
          color: 'grey',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'grey',
          fontStyle: 'italic',
          fontSize: 15,
          fontWeight: 'normal',
        },
        error: {
          paddingLeft: 7,
          color: 'grey',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'grey',
          fontSize: 15,
          fontStyle: 'italic',
          fontWeight: 'normal',
        },
      },
    };
  }
  
  export default formStyles;
