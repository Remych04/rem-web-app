import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NavButtons() {
    const navigator = useNavigate();

    function onClick(path: string) {
        navigator(path);
    }

    return (
        <React.Fragment>
            <Button
                onClick={() => {
                    onClick('/');
                }}
            >
                Main
            </Button>
            <Button
                onClick={() => {
                    onClick('/tasks');
                }}
            >
                Tasks
            </Button>
            <Button
                onClick={() => {
                    onClick('/cv');
                }}
            >
                VC
            </Button>
        </React.Fragment>
    );
}
