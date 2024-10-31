import "./Documents.css";
import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import docBack from "../../assets/images/docum/docum.jpg"
import pdf1 from "../../assets/doccc/one.pdf"
import pdf2 from "../../assets/doccc/two.pdf"

function Documents(){
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
  
    return(
        <>
            <div className="Documents">
                <div className="Docpic">
                    <img src={docBack} alt="" />
                </div>

                <div className="infDOc">
                    <h2>Документы</h2>

                    <div className="buttons">
                        <div className="pdff1">
                            <p>Методические рекомендации</p>
                                <button className="btnPdf" onClick={() => setShowPdf1(!showPdf1)}>
                                {showPdf1 ? 'Скрыть' : 'Показать'}
                                </button>
                                {showPdf1 && (
                                    <div>
                                    <iframe
                                        src={pdf1}
                                        width="600"
                                        height="500"
                                        title="PDF 1"
                                        style={{ border: 'none' }}
                                    />
                                    </div>
                                )}
                        </div>
                    
                        <div className="pdff2">
                            <p>Типовая модель деятельности</p>
                            <button className="btnPdf" onClick={() => setShowPdf2(!showPdf2)}>
                            {showPdf2 ? 'Скрыть' : 'Показать'}
                            </button>
                            {showPdf2 && (
                                <div>
                                <iframe
                                    src={pdf2}
                                    width="600"
                                    height="500"
                                    title="PDF 2"
                                    style={{ border: 'none' }}
                                />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Documents