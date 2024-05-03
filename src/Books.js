import React from 'react';
import booklistData from './booklist.json';
import { DataGrid } from '@mui/x-data-grid';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LinearProgress from '@mui/material/LinearProgress';

const Books = ({ darkmode, langMode }) => {
  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon key={index} style={{ color: '#FFD700' }} />
        ))}
        {hasHalfStar && <StarHalfIcon style={{ color: '#FFD700' }} />}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <StarOutlineIcon key={index} style={{ color: '#FFD700' }} />
        ))}
      </div>
    );
  };

  const renderProgressBar = (progress) => {
    return (
      <div >
      <LinearProgress variant="determinate" value={progress} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} />
    </div>
    );
  };

    const columns = [
      { field: 'title', headerName: langMode ? 'Titre' : 'Title', width: 400, sortable: false, filterable: false },
      { field: 'author', headerName: langMode ? 'Auteur' : 'Author', width: 300, sortable: false, filterable: false },
      { field: 'rating', headerName: langMode ? 'Évaluation' : 'Rating', width: 200, renderCell: (params) => renderStarRating(params.value), sortable: false, filterable: false },
      { field: 'progress', headerName: langMode ? 'Progrès' : 'Progress', width: 200, renderCell: (params) => renderProgressBar(params.value), sortable: false, filterable: false }
    ];

  return (
    <div style={{ width: '100%', color: darkmode ? 'black' : 'white' }}>
      <DataGrid
        rows={booklistData}
        columns={columns}
        pagination
        pageSize={5}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 7, page: 0 },
          },
        }}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Books;
