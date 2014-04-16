// @type {Outbound}
// @property {object} type
// @property {object} batch
// @property {object} items
function Outbound() {
  this.type = {
    process: "batch",
    location: "/data/InterfaceHome/DMS/",
    responseurl: "http://localhost:8888/eElixirInterface/services/DMSBatchProcess",
  };

  this.batch = {
    batchno: 137,
    ids: {
      elixirid: []
    }
  };

  this.items = {
    item: []
  };

}

Outbound.prototype.addItem  = function(item) {
   this.items.item.push(item);
};

// @type {Item}
// @property {string} elixirid
// @property {string} policynbr
// @property {string} eventid
// @property {string} templateid
// @property {string} templatereferncedate
function Item() {
  this.elixirid = "2";
  this.policynbr = "";
  this.eventid = "";
  this.templateid = "";
  this.templatereferencedate = "";
  this.payload = {
    record: []
  };
}

Item.prototype.addRecord = function(record){
  this.payload.record.push(record);
};

// @type {Record}
function Record() {
  this.base_plan_name = "";
  this.proposal_no = "";
  this.proposal_sign_date = "";
  this.policy_issue_date = "";
  this.commencement_date = "";
  this.sum_assured = "";
  this.maturity_date = "";
  this.life_assured_name = "";
  this.entry_age = "";
  this.policy_no = "";
  this.entry_branch = "";
  this.sum_assured = "";
  this.life_assured_address = "";
  this.beneficiary = "";
  this.term_of_policy = "";
  this.premium_paying_term = "";
  this.interest_rate = "";
  this.maturity_benefit = "";
  this.death_benefit = "";
  this.accident_death_benefit = "";
  this.modal_premium = "";
  this.mode_of_payment = "";
  this.due_of_payment = "";
  this.no_due_1st_paid_payment = "";
  this.rider_name = "";
  this.product_code_of_rider = "";
  this.product_ver_of_rider = "";
  this.sum_assured_rider = "";
  this.modal_premium_rider = "";
  this.remarks1 = "";
  this.premium_paying_term_rider = "";
  this.remarks2 = "";
  this.extra_premium_of_rider = "";
  this.total_modal_premium_riders = "";
  this.mode_of_payment_rider = "";
  this.endorsement_code = "";
  this.agent_type = "";
  this.agent_name = "";
  this.license_no = "";
  this.agent_email_address = "";
  this.product_code = "";
  this.product_version = "";
  this.extra_premiumbase_plan = "";
  this.extra_premium_riders = "";
  this.a_auth_person_name = "";
  this.a_posi_of_auth_person_name = "";
  this.b_auth_person_name = "";
  this.b_posi_of_auth_person_name = "";
  this.c_auth_person_name = "";
  this.c_posi_of_auth_person_name = "";
  this.d_auth_person_name = "";
  this.d_posi_of_auth_person_name = "";
  this.alteration_type = "";
  this.religion = "";
  this.term_of_policy_factor = "";
  this.type_of_plan = "";
}

exports.Outbound = Outbound;
exports.Item = Item;
exports.Record = Record;

























