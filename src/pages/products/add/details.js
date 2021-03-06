import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


import { Col, Input } from "../../../components/xbl";
import useForm from "../../../hooks/useForm";
import { showToast } from "../../../redux/ui";



export const Title = () => {
    return (
        <Col className="p50" card="card ofh p1">
            <Input
                className="m0 no-border"
                label="Product title"
                name="name"
            />
        </Col>
    )
}


export const Description = () => {
    return (
        <Col className="p50" card="card ofh p1">
            <div className="header ">
                Product description
            </div>
            <Input
                className="m0 no-border"
                type="textarea"
                rows="3"
                label="Write here"
            />
        </Col>
    )
}






export const BasicInfo = () => {
    const units = ["Gram", "Mililiter", "Centimeter", "Piece"];
    const fixeds = ["Fixed", "Loose"];

    const { handleChange, values } = useForm(null, {
        weight: null,
        unit: units[0],
        fixed: fixeds[0],
        min_qty: null,
        in_stock: null,
        mrp: null,
        selling_price: 50,
    });



    return (
        <Col className="p50" card="card ofh p50 flat">
            <div className="header p50">
                Basic information
            </div>
            <div className='flex aic fww '>
                <Col className="md-up p50" lg="33">
                    Weight
                </Col>
                <Col lg="66" className="flex">
                    <div className="w33 p50">
                        <Input
                            className="m0"
                            label="Weight"
                            type="number"
                            name="weight"
                            value={values.weight || ""}
                            onChange={handleChange}
                            min="10"
                            max="50000"
                        />
                    </div>
                    <div className="w33 p50">
                        <FormControl sx={{ m: 1, minWidth: "100%" }}>
                            <Select
                                type="radio"
                                name="unit"
                                value={values.unit || ""}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">Unit</MenuItem>

                                {
                                    units.map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="w33 p50">
                        <FormControl sx={{ m: 1, minWidth: "100%" }}>
                            <Select
                                type="radio"
                                name="fixed"
                                value={values.fixed || ""}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {
                                    fixeds.map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                </Col>
            </div>


            <div className='flex aic fww'>
                <Col lg="33" className="p50">
                    Quantity
                </Col>
                <Col lg="66" className="flex">
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Min quantity"
                            name="min_qty"
                            type="number"
                            value={values.min_qty || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Qty in stock"
                            name="in_stock"
                            type="number"
                            value={values.in_stock || ""}
                            onChange={handleChange}
                        />
                    </div>
                </Col>
            </div>



            <div className='flex aic fww'>
                <Col lg="33" className="p50">
                    Price
                </Col>
                <Col lg="66" className="flex">
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="MRP"
                            name="mrp"
                            type="number"
                            vtype="decimal"
                            min="10"
                            max="1000"
                            value={values.mrp || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w50 p50">
                        <Input
                            className="m0 flat"
                            label="Selling price"
                            type="number"
                            vtype="decimal"
                            min="10"
                            max="1000"
                            name="selling_price"
                            value={values.selling_price || ""}
                            onChange={handleChange}
                        />
                    </div>
                </Col>
            </div>
        </Col>
    )
}



export const DateInfo = () => {

    const [value, setValue] = useState(new Date());
    const [interval, setinterval] = useState('Months');

    const typeChange = (event, v) => {
        if (!v) return;
        setinterval(v);
    };


    return (
        <Col className="p50" card="card ofh p50 flat">
            <div className="header p50">
                Date information
            </div>
            <div className='flex aic fww '>
                <Col lg="33" className="md-up p50">
                    Manufactured date
                </Col>
                <Col lg="66" className="p50">
                    <div className="pb25 md-down">Manufactured date</div>

                    <div lg="w50" className="">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                inputFormat="dd MMM yyyy"
                                value={value}
                                onChange={(v) => setValue(v)}
                                renderInput={(params) => <TextField  {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </Col>
            </div>
            <div className='flex aic fww'>
                <Col lg="33" className="md-up p50">
                    Expiry
                </Col>
                <Col lg="66" className="p50">
                    <div className="pb25 md-down">Expiry</div>

                    <div className="flex graye br8">
                        <Input
                            className="m0 flat"
                            label={interval}
                            style={{ maxWidth: "150px" }}
                        />
                        <ToggleButtonGroup
                            className="graye"
                            color="primary"
                            value={interval}
                            exclusive
                            onChange={typeChange}
                        >
                            {
                                ["Days", "Months", "Years"].map((e, i) => <ToggleButton key={i} value={e}>{e}</ToggleButton>)
                            }
                        </ToggleButtonGroup>
                    </div>
                </Col>
            </div>
        </Col>
    )
}


export const Identification = () => {
    return (
        <Col className="p50" card="card ofh p50 flat">
            <div className="header p50">
                Identification
            </div>
            <div className='flex aic fww '>
                <Col className="md-up p50" lg="33">
                    Brand name
                </Col>
                <Col lg="66" className="p50">
                    <Input
                        className="m0 flat"
                        label="Brand name"
                    />
                </Col>
            </div>
            <div className='flex aic fww'>
                <Col className="md-up p50" lg="33">
                    EAN
                </Col>
                <Col lg="66" className="p50">
                    <Input
                        className="m0 flat"
                        label="EAN"
                    />
                </Col>
            </div>
        </Col>
    )
}


export const CustomAttribute = () => {
    const dispatch = useDispatch();
    const blankRow = { key: "", value: "" };

    const [attributes, setAttributes] = useState([blankRow]);

    const addRow = () => {
        let nullValue = attributes.find(f => f.value.length === 0);
        if (nullValue) {
            dispatch(showToast("Existing boxes need to be filled"));
            return;
        }
        setAttributes([...attributes, blankRow]);
    }

    const handleChange = (event, index, type = "key") => {
        let v = event.target.value;
        const temp = [...attributes];

        if (type === "key") {
            if (v.length > 30) {
                dispatch(showToast(`Key should < 30 characters`));
                return;
            }
            temp[index].key = v;
        }
        else {
            if (temp[index].key === "") {
                dispatch(showToast(`Key is required`));
                return;
            }
            temp[index].value = v;
        }

        setAttributes(temp);
    }


    return (
        <Col className="p50" card="card ofh p50 flat">
            <div className="header p50">
                Custom attributes
            </div>
            {
                attributes.map((e, i) => <div key={i} className='flex aic fww'>
                    <Col xs="50" className="p50">
                        <Input
                            className="m0 flat no-focus-label"
                            label="Key"
                            value={e.key}
                            minLength="1"
                            maxLength="30"
                            onChange={(e) => handleChange(e, i, "key")}
                        />
                    </Col>
                    <Col xs="50" className="p50">
                        <Input
                            className="m0 flat no-focus-label"
                            label="Value"
                            value={e.value}
                            minLength="1"
                            maxLength="200"
                            onChange={(e) => handleChange(e, i, "value")}

                        />
                    </Col>
                </div>)
            }

            <div className='tc p2'>
                <Button variant="contained" onClick={addRow}>Add row</Button>
            </div>

        </Col>
    )
}

