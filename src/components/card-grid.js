import React from 'react'
import $ from 'jquery'
import Container from "react-bootstrap/cjs/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from "react-bootstrap/cjs/Carousel";
import InputGroup from 'react-bootstrap/cjs/InputGroup';
import FormControl from 'react-bootstrap/cjs/FormControl';
import Button from 'react-bootstrap/cjs/Button';
import SpeciesCard from "./species-card";
import '../styles/card-grid.css'

class CardGrid extends React.Component {
    constructor(props) {
        super(props);
        let species = require('../resources/data.json')
        let chunks = [];
        let i = 0
        while (i < species.length) {
            chunks.push(species.slice(i, i += 12))
        }
        this.state = {
            species: species,
            chunks: chunks,
            filtered_species: species
        }
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                $('.carousel-control-prev')[0].click();
            } else {
                $('.carousel-control-next')[0].click();
            }
        });
    }

    removeAccents(string) {
        return string.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .trim()
            .toLowerCase();
    }

    isIncludes(string, keyword) {
        return this.removeAccents(string).includes(this.removeAccents(keyword));
    }

    render() {
        return (
            <>
                <Container className='search-box'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nhập tên loài vật"
                            aria-label="Nhập tên loài vật"
                            onChange={(e) => {
                                let input = e.target.value;
                                let filteredSpecies = this.state.species.filter(item => {
                                    return this.isIncludes(item.vietnamese_name, input)
                                });
                                let chunks = [];
                                let i = 0;
                                while (i < filteredSpecies.length) {
                                    chunks.push(filteredSpecies.slice(i, i += 12))
                                }
                                this.setState({
                                    chunks: chunks
                                })
                            }}
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Tìm kiếm</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
                <Carousel interval={null} fade={true} className="card-grid">
                    {
                        this.state.chunks.map((chunk, index) => {
                            return <Carousel.Item key={index}>
                                <Container>
                                    <Row>
                                        {
                                            chunk.map((item, idx) => {
                                                return <Col md={3} key={idx}>
                                                    <SpeciesCard obj={item}/>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        })
                    }
                </Carousel>
            </>
        );
    }
}

export default CardGrid