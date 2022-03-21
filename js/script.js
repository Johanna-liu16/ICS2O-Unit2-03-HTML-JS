// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function myButtonClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML = 
    "<p>Your address is: " streetNumber + streetName ".</p>";
}
