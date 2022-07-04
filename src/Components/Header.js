import React from 'react';
import './Header.css'
import image1 from './Images/chatbot2.avif'

const Header = () => {
    return (
        <div>
             <div class="card-header msg_head">
							    <div class="d-flex bd-highlight">
								    <div class="img_cont">
									    <img src={image1} class="rounded-circle user_img" alt =""/>
									    {/* <span class="online_icon"></span> */}
								    </div>
							        <div class="user_info">
								        <span>Chat with Chatbot</span>
							        </div>
						        </div>
					        </div>
        </div>
    );
};

export default Header;

<div class="container-fluid h-100">
<div class="row justify-content-center h-100">
	<div class="col-md-8 col-xl-6 chat">
		<div class="card">
			<div class="card-header msg_head">
				<div class="d-flex bd-highlight">
					<div class="img_cont">
						<img src={image1} class="rounded-circle user_img" alt =""/>
						{/* <span class="online_icon"></span> */}
					</div>
					<div class="user_info">
						<span>Chat with Chatbot</span>
					</div>
				</div>
			</div>
			<div class="card-body msg_card_body">
				<div class="d-flex justify-content-start mb-4">
					<div class="msg_cotainer">
					 Hi, how are you samim?
					</div>
				</div>
				<div class="d-flex justify-content-end mb-4">
					<div class="msg_cotainer_send">
					Hi Khalid i am good tnx how about you?
					</div>
				</div>
				<div class="d-flex justify-content-start mb-4">
					<div class="msg_cotainer">
					I am good too, thank you for your chat template
					</div>
				</div>
				<div class="d-flex justify-content-end mb-4">
					<div class="msg_cotainer_send">
					You are welcome
					</div>
				</div>
				<div class="d-flex justify-content-start mb-4">
					<div class="msg_cotainer">
						I am looking for your next templates
					</div>
				</div>
				<div class="d-flex justify-content-end mb-4">
					<div class="msg_cotainer_send">
						Ok, thank you have a good day
					</div>
				</div>
				<div class="d-flex justify-content-start mb-4">
					<div class="msg_cotainer">
						Bye, see you
					</div>
				</div>
			</div>
		<div class="card-footer">
			<div class="input-group">
				{/* <div class="input-group-append">
					<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
				</div> */}
				<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
				<div class="input-group-append">
					<span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>