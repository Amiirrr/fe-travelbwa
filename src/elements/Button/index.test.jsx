import React from "react";
import { render } from '@testing-library/react'
import Button from "./index";
import { expect } from "vitest";

test('should not allowed click button if isDisabled is present', () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should render loading/spinner', () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument
    expect(container.querySelector('span')).toBeInTheDocument();
})

test('Should render <a> tag', () => {
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument();
})

test('Should render <Link> componenet', () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span')).toBeInTheDocument()
})
