import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false); 

    const handleClick = () =>{
        setShowModal(true);
    };
    
    const handleClose =()=>{
        setShowModal(false);
    };

    const actionBar =<div><Button onClick={handleClose} primary>I Accept</Button></div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>
    return <div >
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a nisl ac maximus. Mauris blandit placerat justo id imperdiet. Ut vel imperdiet purus, ut pharetra leo. Donec in fermentum nibh. In eleifend euismod nisl vel vulputate. Nulla facilisi. Curabitur malesuada metus mauris, non gravida nunc varius quis. Cras sodales suscipit dolor eu molestie. Cras ac enim nec nunc fringilla gravida.
        </p>
        
    </div>
}

export default ModalPage;