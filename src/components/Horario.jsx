import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import PersonIcon from '@mui/icons-material/Person'
import { Chip } from '@mui/material'
import './horario.css'

export default function AccordionUsage() {
  const timeClass = [
    {
      lunes: {
        '18:00-18:40': {
          materia: 'Educación tecnológica',
          profesor: 'Javier Sanchez',
          color: '#FF5733',
        },
        '18:40-19:20': {
          materia: 'Educación tecnológica',
          profesor: 'Javier Sanchez',
          color: '#FF5733',
        },
        '19:20-19:30': { materia: 'Recreo', color: '#00FF00' },
        '19:30-20:10': { materia: 'Matemática', profesor: 'Alejandra Alonso', color: '#3366FF' },
        '20:10-20:55': { materia: 'Matemática', profesor: 'Alejandra Alonso', color: '#3366FF' },
        '20:55-21:30': { materia: 'Matemática', profesor: 'Alejandra Alonso', color: '#3366FF' },
      },
      martes: {
        '18:00-18:40': { materia: 'F.E.C.', profesor: 'Daniel Fernandez', color: '#FFC300' },
        '18:40-19:20': { materia: 'F.E.C.', profesor: 'Daniel Fernandez', color: '#FFC300' },
        '19:20-19:30': { materia: 'Recreo', color: '#00FF00' },
        '19:30-20:10': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
        '20:10-20:55': { materia: 'Geografía', profesor: 'Sin profesor', color: '#f0932b' },
        '20:55-21:30': { materia: 'Geografía', profesor: 'Sin profesor', color: '#f0932b' },
      },
      miércoles: {
        '18:00-18:40': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
        '18:40-19:20': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
        '19:20-19:30': { materia: 'Recreo', color: '#00FF00' },
        '19:30-20:10': { materia: 'Inglés', profesor: 'Paskevicius', color: '#FF9933' },
        '20:10-20:55': { materia: 'Inglés', profesor: 'Paskevicius', color: '#FF9933' },
        '20:55-21:30': { materia: 'Historia', profesor: 'Ariel Sanchez', color: '#686de0' },
      },
      jueves: {
        '18:00-18:40': { materia: 'Biología', profesor: 'Federico Modareli', color: '#6ab04c' },
        '18:40-19:20': { materia: 'Biología', profesor: 'Federico Modareli', color: '#6ab04c' },
        '19:20-19:30': { materia: 'Recreo', color: '#00FF00' },
        '19:30-20:10': { materia: 'Historia', profesor: 'Ariel Sanchez', color: '#686de0' },
        '20:10-20:55': { materia: 'Historia', profesor: 'Ariel Sanchez', color: '#686de0' },
        '20:55-21:30': { materia: 'Historia', profesor: 'Ariel Sanchez', color: '#686de0' },
      },
      viernes: {
        '18:00-18:40': { materia: 'Matemática', profesor: 'Alejandra Alonso', color: '#3366FF' },
        '18:40-19:20': { materia: 'Matemática', profesor: 'Alejandra Alonso', color: '#3366FF' },
        '19:20-19:30': { materia: 'Recreo', color: '#00FF00' },
        '19:30-20:10': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
        '20:10-20:55': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
        '20:55-21:30': { materia: 'Lengua', profesor: 'Bavasso / Garberi', color: '#FF3366' },
      },
    },
  ]

  const currentDayIndex = new Date().getDay()
  const defaultExpandedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1

  return (
    <div>
      {Object.keys(timeClass[0]).map((dia, index) => (
        <Accordion key={index} defaultExpanded={index === defaultExpandedIndex}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {dia.toUpperCase()}
          </AccordionSummary>
          <AccordionDetails>
            {Object.entries(timeClass[0][dia]).map(([horario, datos], index) => (
              <div className="item-horario" key={index}>
                {horario !== 'Recreo' ? (
                  <>
                    <Chip icon={<AccessTimeIcon />} label={horario} />
                    <Chip
                      icon={<LocalLibraryIcon />}
                      label={datos.materia}
                      style={{ backgroundColor: datos.color }}
                    />
                    {datos.profesor && (
                      <Chip icon={<PersonIcon />} label={datos.profesor} color="primary" />
                    )}
                  </>
                ) : (
                  <p style={{ color: datos.color }}>{horario}</p>
                )}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
