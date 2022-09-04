import React from 'react';
import './index.scss';

const Modal = ({ open, setOpen, children }) => (

  <div className={`overlay animated ${open ? 'show' : ''}`}>
    
    <div className="modal">
      <svg onClick={() => setOpen(false)} width="50" height="50" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.0354" y="2.5" width="31" height="31" rx="7.5" fill="white" stroke="#E0E0E0" />
        <path d="M26.5713 23.2431L21.0058 17.6776L26.5711 12.1124C28.7171 9.96634 25.3889 6.63811 23.2428 8.78412L17.6776 14.3494L12.1121 8.78393C9.96657 6.63839 6.63846 9.96651 8.78399 12.112L14.3495 17.6775L8.78419 23.2428C6.63818 25.3888 9.96641 28.717 12.1124 26.571L17.6777 21.0057L23.2432 26.5712C25.389 28.717 28.7171 25.3889 26.5713 23.2431Z" fill="#C4C4C4" />
      </svg>
      {children}
    </div>

  </div>
)

function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        Click me
      </button>

      <Modal open={open} setOpen={setOpen}>
        <img src="./img/travolta.gif" alt="gif" />
        <img src="./img/romashki.jpg" className='back' alt="Romashki"/>
      </Modal>

    </div>
  );
}

export default App;
