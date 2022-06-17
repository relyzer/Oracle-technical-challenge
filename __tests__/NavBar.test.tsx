import React from 'react';

import { render, screen } from "@testing-library/react"
import NavBar from "../components/NavBar"

test('Title should link to home page', () => {
  render(<NavBar />)
  expect(screen.getByText('DEMO Streaming').closest('a')).toHaveAttribute('href', '/')
})

test('Login should link to Login page', () => {
  render(<NavBar />)
   //  Not fully implemented as there is no login page for this challenge
  expect(screen.getByText('Log in').closest('a')).toHaveAttribute('href', '/')
})

test('Start your free trial should link to sign-up page', () => {
  render(<NavBar />)
  //  Not fully implemented as there is no sign-up page for this challenge
  expect(screen.getByText('Start your free trial').closest('a')).toHaveAttribute('href', '/')
})