<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestBook extends Model
{
    protected $fillable = ['clinic_id', 'full_name', 'mobile_number','email','appointment_date','approved'];   
}
