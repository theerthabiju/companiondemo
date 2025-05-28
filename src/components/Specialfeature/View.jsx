import React, { useState } from "react";
import "../../assets/css/specialfeature/view.css";

const View = () => {
  const [viewpoints, setViewpoints] = useState([]);
  const [labelInput, setLabelInput] = useState("");
  const [imageInput, setImageInput] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleAddViewpoint = async () => {
    if (!labelInput.trim() || !imageInput) {
      alert("Please provide both an image and a viewpoint name.");
      return;
    }

    const formData = new FormData();
    formData.append("label", labelInput);
    formData.append("image", imageInput);

    try {
      const response = await fetch("https://your-api.com/viewpoints", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to add viewpoint");

      const newViewpoint = await response.json();
      setViewpoints([{ image: newViewpoint.imageURL, label: newViewpoint.label }, ...viewpoints]);
      setLabelInput("");
      setImageInput(null);
      setPreviewURL("");
      setShowModal(false); 
    } catch (error) {
      console.error("Error adding viewpoint:", error);
      alert("Failed to add viewpoint. Please try again.");
    }
  };

  return (
    <div className="container viewcontainer">
      <h3 className="viewtexthead">Add a <span className="viewtext">View Point</span> </h3>
      <p className="viewtextparagraph">Help fellow travelers by sharing your favorite camping spots.</p>
      <div className="parent-center">
        <button className="addviewpointbtn" onClick={() => setShowModal(true)}>
          Add View Point
        </button>
      </div>

      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add View Point</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="View Point Name"
                  value={labelInput}
                  onChange={(e) => setLabelInput(e.target.value)}
                />
                <input
                  type="file"
                  className="form-control mb-2"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {previewURL && (
                  <img
                    src={previewURL}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxHeight: "200px" }}
                  />
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline text-danger" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-outline viewpointmodalbtn text-white " onClick={handleAddViewpoint}>
                  Save View Point
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row viewpointrow mt-5">
        {viewpoints.map((view, index) => (
          <div className="col-12 col-sm-6 col-md-3 text-center viewpointcol" key={index}>
            <div className="viewpointcard position-relative">
              <img className="viewpointimg" src={view.image} alt={`viewpoint-${index}`} />
              <button className="btn btn-outline viewpointimgbtn text-white">{view.label}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
