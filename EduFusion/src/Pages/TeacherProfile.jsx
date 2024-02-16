import React from "react";

const Profile = () => {
  return (
    <div>
      <section className="user-profile">
        <h1 className="heading">Your Profile</h1>
        <div className="info">
          <div className="user">
            <img src="images/pic-1.jpg" alt="Profile" />
            <h3>Shaikh Anas</h3>
            <p>Student</p>
            <a href="update.html" className="inline-btn">
              Update Profile
            </a>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="flex">
                <i className="fas fa-bookmark"></i>
                <div>
                  <span>4</span>
                  <p>Saved Playlist</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                View Playlists
              </a>
            </div>

            <div className="box">
              <div className="flex">
                <i className="fas fa-heart"></i>
                <div>
                  <span>33</span>
                  <p>Videos Liked</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                View Liked
              </a>
            </div>

            <div className="box">
              <div className="flex">
                <i className="fas fa-comment"></i>
                <div>
                  <span>12</span>
                  <p>Videos Comments</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                View Comments
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
