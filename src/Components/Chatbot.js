import React from 'react';
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
            <Header/>
            <MessageArea/>
            <UserInput/>
        </div>
    );
};

export default Chatbot;