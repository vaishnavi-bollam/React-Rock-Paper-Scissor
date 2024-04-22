// import {Component} from 'react'
// import Modal from 'react-modal'

// import Images from '../Images/index'
// import './index.css'

// const choicesList = [
//   {
//     id: 'ROCK',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
//   },
//   {
//     id: 'SCISSORS',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
//   },
//   {
//     id: 'PAPER',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
//   },
// ]

// class Home extends Component {
//   state = {
//     modalIsOpen: false,
//   }

//   toggleModal() {
//     this.setState(prevState => ({
//       modalIsOpen: !prevState.modalIsOpen,
//     }))
//   }

//   render() {
//     const {modalIsOpen} = this.state
//     return (
//       <div>
//         <div className="container">
//           <div>
//             <h1>ROCK</h1>
//             <h1>PAPER</h1>
//             <h1>SCISSORS</h1>
//           </div>
//           <div>
//             <h1>Score</h1>
//             <h1>1</h1>
//           </div>
//         </div>
//         <div>
//           {choicesList.map(eachChoice => (
//             <Images eachChoice={eachChoice} />
//           ))}
//         </div>
//         <button onClick={this.toggleModal}>RULES</button>
//         <Modal isOpen={modalIsOpen}>
//           <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" />
//         </Modal>
//       </div>
//     )
//   }
// }

// export default Home

import {Component} from 'react'
import Modal from 'react-modal'

import Images from '../Images/index'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    modalIsOpen: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
    }))
  }

  render() {
    const {modalIsOpen} = this.state
    return (
      <div className="main-bg">
        <div className="container">
          <div>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
          </div>
          <div>
            <h1>Score</h1>
            <h1>1</h1>
          </div>
        </div>
        <div>
          {choicesList.map(eachChoice => (
            <Images eachChoice={eachChoice} key={eachChoice.id} />
          ))}
        </div>
        <button onClick={this.toggleModal}>RULES</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.toggleModal}
          className="modal"
          overlayClassName="overlay"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="Rules"
          />
        </Modal>
      </div>
    )
  }
}

export default Home
