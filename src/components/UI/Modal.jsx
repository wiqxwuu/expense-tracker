import React from 'react'

const Modal = () => {

//   const styledContainer = styled.div`
//     width: 400px;
//     height: 400px;
//     background-color: #dada6b;
//     border-radius: 2rem;
// `
// style={styledContainer}

  return (
    <div >
      <p>Вы уверены, что хотите удалить этот расход?</p>
      <button>Да</button>
      <button>Нет</button>
    </div>
  )
}

export default Modal
