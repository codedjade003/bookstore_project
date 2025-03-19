import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const EditBook = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
  
  const bookCategories = [
    "Fiction", "Non Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
    "Memoir", "Self-help", "Business", "Children Books", "Travel",
    "Religion", "Art and Design", "Music",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updateBookObj = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.category.value,
      bookDescription: form.bookDescription.value,
      bookPDFURL: form.bookPDFURL.value,
    };

    // console.log(bookObj);
    //update book data

    fetch(`https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book Updated Successfully!")
    })
  };

  return (
    <div className="px-4 my-12 max-w-5xl mx-auto">
      <h2 className="mb-8 text-3xl font-bold">Update A Book</h2>
      
      <form onSubmit={handleUpdate} className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md">
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Book Title */}
          <div>
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput id="bookTitle" name="bookTitle" placeholder="Enter book title" required type="text" className="w-full" defaultValue={bookTitle}/>
          </div>

          {/* Author Name */}
          <div>
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name="authorName" placeholder="Enter author name" required type="text" className="w-full"defaultValue={authorName} />
          </div>

          {/* Cover Image Upload */}
          <div>
            <Label htmlFor="imageURL" value="Book Cover Image URL" />
            <TextInput id="imageURL" name="imageURL" placeholder="Enter cover image URL" required type="text" className="w-full" defaultValue={imageURL}/>
          </div>

          {/* Category Selection */}
          <div>
            <Label htmlFor="category" value="Category" />
            <Select id="category" name="category" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue} defaultValue={category}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>

        </div>

        {/* Description (Single Large Row) */}
        <div>
          <Label htmlFor="bookDescription" value="Description" />
          <Textarea id="bookDescription" name="bookDescription" placeholder="Brief description of the book" required className="w-full h-40" defaultValue={bookDescription}/>
        </div>

        {/* Book File Upload (Wide but Short) */}
        <div>
          <Label htmlFor="bookPDFURL" value="Upload Book File (PDF or EPUB URL)" />
          <TextInput id="bookPDFURL" name="bookPDFURL" placeholder="Book file URL" required type="text" className="w-full h-10" defaultValue={bookPDFURL}/>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-5 w-full bg-red-700 hover:bg-red-800 text-white">
          Update Book
        </Button>
        
      </form>
    </div>
  );
};


export default EditBook