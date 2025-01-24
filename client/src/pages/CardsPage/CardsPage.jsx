import React from 'react';
import CardList from '../../widgets/CardList/CardList';
import { useNavigate } from 'react-router-dom';

function CardsPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <CardList />
        </div>
    );
}

export default CardsPage;