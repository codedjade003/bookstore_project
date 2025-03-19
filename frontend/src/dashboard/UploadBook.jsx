import React, { useState } from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Memoir",
    "Self-help",
    "Business",
    "Children Books",
    "travel",
    "Religion",
    "Art and Design",
    "Music",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj);
    // send Data to the backend
    fetch("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data)
    })
    alert("Book uploaded successfully!");
  };
  return (
    <div className="px-4 my-12 max-w-2xl mx-auto">
      <h2 className="mb-8 text-3xl font-semibold text-center">Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
        {/* Book Title */}
        <div>
          <Label htmlFor="bookTitle" value="Book Title" />
          <TextInput id="bookTitle" name='bookTitle' placeholder="Enter book title" required type="text"/>
        </div>

        {/* Author Name */}
        <div>
          <Label htmlFor="authorName" value="Author Name" />
          <TextInput id="authorName" name='authorName' placeholder="Enter author name" required type="text"/>
        </div>

        {/* Book Description */}
        <div>
          <Label htmlFor="bookDescription" value="Description" />
          <Textarea id="bookDescription" name='bookDescription' placeholder="Brief description of the book" rows={4} required />
        </div>

        {/* Category Selection */}
        <div>
          <Label htmlFor="inputState" value="Category" />
          <Select id="inputState" name='category' className="w-full rounded" value={selectedBookCategory} 
          onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>
        </div>

        {/* Cover Image Upload */}
        <div>
          <Label htmlFor="imageURL" value="Upload Cover Image" />
          <TextInput id="imageURL" name="imageURL" placeholder="Book Cover" required type = "text" />
        </div>

        {/* Book File Upload */}
        <div>
          <Label htmlFor="bookPDFURL" value="Upload Book File (PDF or EPUB)" />
          <TextInput id="bookPDFURL" name='bookPDFURL' placeholder="Book URL" required type= "text"/>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-5 w-full bg-red-700 hover:bg-red-800 text-white">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
