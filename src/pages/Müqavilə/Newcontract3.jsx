import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import SignatureCanvas from 'react-signature-canvas'

function Newcontract3() {
    const [sigCanvas, setSigCanvas] = useState('');
    const [imageURL, setImageURL] = useState(null)
    const [pointsArray, setPointsArray] = React.useState(null);
    const save = () => {
    
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
        console.log(imageURL)
    };
    return (
        <Layout>
            <h1>New contract3 </h1>
            <div className="border-4 ">
                <SignatureCanvas penColor='black'
                    onEnd={save}

                    ref={(ref) => { setSigCanvas(ref) }}
                    canvasProps={{ width: 500, height: 400, className: 'bg-red' }} />
            </div>
        </Layout>

    )
}

export default Newcontract3
