// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("user-address").innerHTML = 
    "Your address is: " streetNumber + streetName "."
}
