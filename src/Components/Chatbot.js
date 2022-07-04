import React from 'react';
import './Css/Style.css'
import Header from './Header';
import MessageArea from './MessageArea';
import UserInput from './UserInput';

const Chatbot = () => {
    return (
        <div>
            {/* <div class="container-fluid h-100">
			    <div class="row justify-content-center h-100">
				    <div class="col-md-8 col-xl-6 chat">
					    <div class="card">
                            <Header/>
                            <MessageArea/>
                            <UserInput/>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="chat_window">
            <Header/>
            <MessageArea/>
            <UserInput/>
            </div>
            
        </div>
    );
};

export default Chatbot;